from django import forms
from .models import UploadFile  # Import your model

class UploadFileForm(forms.ModelForm):
    class Meta:
        model = UploadFile
        fields = ['title', 'file']
