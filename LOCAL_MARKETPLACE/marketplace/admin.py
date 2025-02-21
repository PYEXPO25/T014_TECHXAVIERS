from django.contrib import admin
from .models import User, Product, Order  # Ensure all models exist in models.py
from .models import UploadFile

admin.site.register(User)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(UploadFile)