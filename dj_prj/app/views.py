from django.shortcuts import render
from rest_framework import viewsets
from app.models import MainDocuments, Person, Company, City, Role
from app.serializer import DocumentSerializer, PersonSerializer, CompanySerializer, CitySerializer, RoleSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
import json
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view


from rest_framework import generics
from django.db.models import Q

class SerchDocumentList(generics.ListAPIView):
    serializer_class = DocumentSerializer
    def get_queryset(self):
        key = self.kwargs['key']
        arrkey = key.split(' ')
        q_objects = Q()
        for item in arrkey:
            q_objects.add(Q(search_field__icontains=item), Q.AND)
        return MainDocuments.objects.filter(q_objects)
   
class SerchPersonList(generics.ListAPIView):
    serializer_class = PersonSerializer
    def get_queryset(self):
        q_objects = Q()
        fio = self.kwargs['fio']
        role = self.kwargs['role']
        birth = self.kwargs['birth']
        if fio != 'undefined':
            arrkey = fio.split(' ')
            for item in arrkey:
                q_objects.add(Q(search_field__icontains=item), Q.AND)
            #print(Person.objects.filter(q_objects).query)
        if role != 'undefined' and role != 'null':
            q_objects.add(Q(roleperson=role),Q.AND)
        if birth != 'undefined':
            q_objects.add(Q(birth=birth),Q.AND)
        return Person.objects.filter(q_objects)


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all().order_by('-id')
    serializer_class = CompanySerializer   

class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all().order_by('-id')
    serializer_class = PersonSerializer

class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all().order_by('name_ru')
    serializer_class = RoleSerializer
    pagination_class = None

class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all().order_by('name_ru')
    serializer_class = CitySerializer
    pagination_class = None

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
    queryset = MainDocuments.objects.all().order_by('-id')
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
        