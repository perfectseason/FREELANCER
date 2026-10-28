from django.urls import path

from .views import CarouselImageListAPIView


urlpatterns = [
    path(
        "",
        CarouselImageListAPIView.as_view(),
        name="carousel-image-list",
    ),
]