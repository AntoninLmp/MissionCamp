from django.contrib import admin
from django.urls import path

from funds.views import index

urlpatterns = [
    path('', index, name='funds_index'),
]