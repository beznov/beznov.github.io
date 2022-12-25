from .models import Contact
from django.forms import DateTimeInput, ModelForm, TextInput, EmailInput, Textarea
from django import forms
from django.contrib.auth.models import User


class ContactForm(ModelForm):
  class Meta:
    model = Contact
    fields = ['name', 'email', 'message', 'date', 'time']
    widgets = {
    'name': TextInput(
        attrs={'class': 'form-control', 'id': 'formGroupExampleInput', 'placeholder': 'Your Name'}
        ),
    'email': EmailInput(
        attrs={'class': 'form-control', 'id': 'formGroupExampleInput1', 'placeholder': 'example@gmail.com'}
        ),
    'message': Textarea(
        attrs={'class': 'form-control', 'id': 'exampleFormControlTextarea1', 'placeholder': 'Your Problem'}
        ),
    'date': DateTimeInput(attrs={'class': 'form-control', 'type': 'date'}),
    'time': DateTimeInput(attrs={'class': 'form-control', 'type': 'time'}),
    }


class UserRegistrationForm(ModelForm):
    class Meta:
        model = User
        fields = ('username', 'first_name','last_name', 'email', 'password')
        widgets = {
    'username': TextInput(
        attrs={'class': 'form-control form-control-lg'}
        ),
    'first_name': TextInput(
        attrs={'class': 'form-control form-control-lg'}
        ),
    'last_name': TextInput(
        attrs={'class': 'form-control form-control-lg'}
        ),
    'email': EmailInput(
        attrs={'class': 'form-control form-control-lg', 'placeholder': 'example@gmail.com'}
        ),
    'password': forms.PasswordInput(
        attrs={'class': 'form-control form-control-lg'}
        ),
    }

class LoginForm(forms.Form):
    username = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control form-control-lg'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control form-control-lg'}))
    
