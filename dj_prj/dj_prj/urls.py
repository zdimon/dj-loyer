from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from app.views import DocumentViewSet, LoginView, registration

router = routers.DefaultRouter()
router.register(r'documents', DocumentViewSet)

urlpatterns = [
    path('api/login', LoginView.as_view()),
    path('api/register', registration),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
