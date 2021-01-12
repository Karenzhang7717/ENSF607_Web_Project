from django.conf.urls import url 
from echos import views 
 
urlpatterns = [ 
    url(r'^', include('echos.urls')),
    url(r'^api/echos$', views.echos_list),
    url(r'^api/echos/(?P<pk>[0-9]+)$', views.echos_detail),
    url(r'^api/echos/published$', views.echos_list_published)
]