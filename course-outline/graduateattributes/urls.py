from rest_framework import routers, urlpatterns
from .api import GraduateAttributesViewSet

# we can use the default router for REST API

router = routers.DefaultRouter()

router.register("api/graduateattributes",
                GraduateAttributesViewSet, 'graduateattributes')

urlpatterns = router.urls
