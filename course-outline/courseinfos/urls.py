from rest_framework import routers
from .api import CourseInfoViewSet

# we can use the default router for REST API

router = routers.DefaultRouter()

router.register("api/courseinfos", CourseInfoViewSet, 'courseinfos')

urlpatterns = router.urls