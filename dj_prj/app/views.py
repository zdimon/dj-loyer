from django.shortcuts import render
from rest_framework import viewsets
from app.models import MainDocuments
from app.serializer import DocumentSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
import json
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view

@api_view(['POST'])
def registration(request):
    payload = json.loads(request.body.decode('utf-8'))
    print(payload)
    try:
        user = User()
        user.username = payload['username']
        user.email = payload['email']
        user.set_password(payload['password'])
        user.is_active = True
        user.save()
        return Response({"status": 0, "message": "User has been created!"})
    except Exception as e:
        return Response({"status":1, "message": str(e)})

class DocumentViewSet(viewsets.ModelViewSet):
    queryset = MainDocuments.objects.all()
    serializer_class = DocumentSerializer



class LoginView(APIView):
    def post(self, request):
        payload = json.loads(request.body.decode('utf-8'))
        try:
            user = User.objects.get(username=payload['login'])
            if not user.check_password(payload['password']):
                 return Response({"status": 1, "message": "Error, wrong password!"})
            else:
                try:
                    token = Token.objects.get(user=user)
                except:
                    token = Token.objects.create(user=user)
                return Response({
                                 "status": 0, 
                                 "message": "ok", 
                                 "token": token.key
                                 })
        except Exception as e:
            return Response({"status": 1, "message": "Error, wrong login!", "exeption": str(e)})
        