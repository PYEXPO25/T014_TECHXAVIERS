from django.contrib.auth.models import AbstractUser
from django.db import models
from cloudinary.models import CloudinaryField


# Custom User Model
class User(AbstractUser):
    is_farmer = models.BooleanField(default=False)  # To distinguish farmers from consumers

    class Meta:
        swappable = 'AUTH_USER_MODEL'  # Ensures smooth migration

    # Prevent conflicts with default groups and permissions
    groups = models.ManyToManyField(
        "auth.Group",
        related_name="marketplace_users",
        blank=True
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        related_name="marketplace_users",
        blank=True
    )

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    stock = models.IntegerField()

class Order(models.Model):
    product = models.ForeignKey("Product", on_delete=models.CASCADE)
    quantity = models.IntegerField()
    order_date = models.DateTimeField(auto_now_add=True)

class ImageModel(models.Model):
    name = models.CharField(max_length=255)
    image = CloudinaryField('image')
    def __str__(self):
        return self.username
class UploadFile(models.Model):
    title = models.CharField(max_length=255)
    file = models.FileField(upload_to='uploads/')

    def __str__(self):
        return self.title
