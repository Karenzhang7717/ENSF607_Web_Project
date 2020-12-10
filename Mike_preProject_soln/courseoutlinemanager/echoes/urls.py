from rest_framework import routers
from .api import EchoesViewSet

# we can use the default router for REST API

router = routers.DefaultRouter()

router.register("api/echoes", EchoesViewSet, 'echoes')

urlpatterns = router.urls
