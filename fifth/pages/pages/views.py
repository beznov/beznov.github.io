from django.shortcuts import render, redirect
from .forms import ContactForm, LoginForm, UserRegistrationForm
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import get_template
from django.http import HttpResponse
from django.contrib.auth import authenticate, login


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


def register(request):
    if request.method == 'POST':
        user_form = UserRegistrationForm(request.POST)
        if user_form.is_valid():
            new_user = user_form.save(commit=False)
            new_user.set_password(user_form.cleaned_data['password'])
            new_user.save()
            return render(request, 'home.html', {'new_user': new_user})
    else:
        user_form = UserRegistrationForm()
        return render(request, 'register.html', {'user_form': user_form})


def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cleaned = form.cleaned_data
            user = authenticate(username=cleaned['username'], password=cleaned['password'])
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return render(request, 'home.html')
                else:
                    return HttpResponse('Disabled account')
            else:
                return HttpResponse('Invalid login')
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})