from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from app.views import PersonViewSet, DocumentViewSet, LoginView, registration, SerchDocumentList, CompanyViewSet, CityViewSet, RoleViewSet, SerchPersonList, NamesakeList, CompanySearchByPersonIdList

router = routers.DefaultRouter()
router.register(r'documents', DocumentViewSet)
router.register(r'persons', PersonViewSet)
router.register(r'company', CompanyViewSet)
router.register(r'cities', CityViewSet)
router.register(r'role', RoleViewSet)
#router.register(r'documents_search/(?P<key>.+)', SerchDocumentList.as_view(), base_name='documents_search')

from rest_framework_cache.registry import cache_registry
cache_registry.autodiscover()

urlpatterns = [
    path('api/login', LoginView.as_view()),
    path('api/documents_search/<str:key>', SerchDocumentList.as_view()),
    path('api/namesake_search/<str:key>', NamesakeList.as_view()),
    path('api/company_search/<int:person_id>', CompanySearchByPersonIdList.as_view()),
    path('api/person_search/<str:fio>/<str:role>/<str:birth>', SerchPersonList.as_view()),
    path('api/register', registration),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
