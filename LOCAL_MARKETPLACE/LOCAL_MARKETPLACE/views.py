from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login as auth_login
from cloudinary import CloudinaryImage
 # Assuming UploadedImage model is defined in models.py

def homepage(request):
    return render(request, 'homepage.html')
def login(request):
    return render(request, 'login.html')
def signup(request):
    return render(request, 'signup.html')
def cart(request):
    return render(request, 'cart.html')

def user_login(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            auth_login(request, user)  # Use Django's login function safely
            return redirect("home")  # Redirect to a page after login
        else:
            messages.error(request, "Invalid username or password")

    return render(request, "login.html")


