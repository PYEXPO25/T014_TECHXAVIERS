from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, OrderViewSet,product_list
from .views import ImageUploadViewSet
from .views import upload_file , image_list

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'images', ImageUploadViewSet, basename='image-upload')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/', include('marketplace.auth_urls')),
    path('products/',product_list, name='products_list'),
    path('upload/', upload_file, name='upload_file'),
     path('images/', image_list, name='image_list'),
]
