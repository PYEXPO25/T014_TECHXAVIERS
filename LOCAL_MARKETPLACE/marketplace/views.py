from rest_framework import viewsets
from .models import Product, Order
from .serializers import ProductSerializer, OrderSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.shortcuts import render ,redirect
from .models import ImageModel
from .serializers import ImageSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from .serializers import ImageSerializer
from .forms import UploadFileForm
from .forms import UploadFile

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": "You have access to this protected API!"})

def product_list(request):
    products = Product.objects.all()
    return render(request, 'products.html', {'products': products})
    
class ImageUploadViewSet(viewsets.ModelViewSet):
    queryset = ImageModel.objects.all()
    serializer_class = ImageSerializer
    parser_classes = (MultiPartParser, FormParser)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
def upload_file(request):
    if request.method == "POST":
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
    else:
        form = UploadFileForm()
    return render(request, 'upload.html', {'form': form})

def image_list(request):
    images = UploadFile.objects.all()
    return render(request, 'image_list.html', {'images': images})