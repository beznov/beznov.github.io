from django.shortcuts import render, redirect
from .forms import ContactForm
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import get_template

def home(request):
    return render(request, 'home.html')


def order(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            send_message(form.cleaned_data['name'], 
                form.cleaned_data['email'], 
                form.cleaned_data['message'], 
                form.cleaned_data['date'], 
                form.cleaned_data['time'],
                )
    form = ContactForm()
    context = {
        'form': form
    }
    return render(request, 'order.html', context)


def about(request):
    return render(request, 'about.html')


def send_message(name, email, message, date, time):
    text = get_template('message.html')
    context = {'name': name, 'email': email, 'message': message, 'date': date, 'time': time}
    subject = 'Order info'
    from_email = 'abc@gmail.com'
    text_content = text.render(context)

    msg = EmailMultiAlternatives(subject, text_content, from_email, ['abc@gmail.com'])
    msg.send()