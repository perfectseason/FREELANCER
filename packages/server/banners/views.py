from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny

from .models import CarouselImage
from .serializers import CarouselImageSerializer


class CarouselImageListAPIView(ListAPIView):
    serializer_class = CarouselImageSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):  # type: ignore[reportIncompatibleMethodOverride]
        return CarouselImage.objects.filter(
            is_active=True
        ).order_by("display_order", "id")
