
from rest_framework import routers
from .api import GPAConversionViewSet

# we can use the default router for REST API

router = routers.DefaultRouter()

router.register("api/gpaconversion", GPAConversionViewSet, 'gpaconversion')

urlpatterns = router.urls