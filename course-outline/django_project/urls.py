from django.urls import path, include

urlpatterns = [
    path('', include('echos.urls')),
    path('', include('courseinfos.urls')),
    path('', include('coursegrades.urls')),
    path('', include('gpaconversion.urls')),
    path('', include('learningoutcomes.urls')),
    path('', include('graduateattributes.urls')),
]
