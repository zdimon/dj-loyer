from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from app.views import PersonViewSet, DocumentViewSet, LoginView, registration, SerchDocumentList

router = routers.DefaultRouter()
router.register(r'documents', DocumentViewSet)
router.register(r'persons', PersonViewSet)
#router.register(r'documents_search/(?P<key>.+)', SerchDocumentList.as_view(), base_name='documents_search')

urlpatterns = [
    path('api/login', LoginView.as_view()),
    path('api/documents_search/<str:key>', SerchDocumentList.as_view()),
    path('api/register', registration),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
