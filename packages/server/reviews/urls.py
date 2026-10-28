from django.urls import path

from .views import ReviewListAPIView


urlpatterns = [
    path("", ReviewListAPIView.as_view(), name="review-list"),
]