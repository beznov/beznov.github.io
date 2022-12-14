from .models import Contact
from django.forms import DateTimeInput, ModelForm, TextInput, EmailInput, Textarea, CharField


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

    



