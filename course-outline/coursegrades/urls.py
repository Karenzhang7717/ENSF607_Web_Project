from rest_framework import routers
from .api import CourseGradeViewSet

# we can use the default router for REST API

router = routers.DefaultRouter()

router.register("api/coursegrades", CourseGradeViewSet, 'coursegrades')

urlpatterns = router.urls