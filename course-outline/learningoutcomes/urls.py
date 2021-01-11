from rest_framework import routers, urlpatterns
from .api import LearningOutcomeViewSet

# we can use the default router for REST API

router = routers.DefaultRouter()

router.register("api/learningoutcomes",
                LearningOutcomeViewSet, 'learningoutcomes')

urlpatterns = router.urls
