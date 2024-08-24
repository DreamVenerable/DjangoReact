from django.urls import path
from . import views

urlpatterns = [
    path('randnumber/', views.randnumber),
    path('motivational-quote/', views.motivational_quote),
]
