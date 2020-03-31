from django.urls import path
from MapViz import views

app_name = 'mapviz'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index')
]
