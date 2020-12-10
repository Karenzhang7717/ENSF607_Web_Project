from rest_framework import routers
from .api import LeadViewSet

# we can use the default router for REST API

router = routers.DefaultRouter()

router.register("api/leads", LeadViewSet, 'leads')

urlpatterns = router.urls
