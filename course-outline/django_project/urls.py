from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('', include('echos.urls')),
    path('', include('courseinfos.urls')),
    path('', TemplateView.as_view(template_name='index.html'))
]
