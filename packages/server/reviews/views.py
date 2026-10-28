from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny

from .models import Review
from .serializers import ReviewSerializer


class ReviewListAPIView(ListAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [AllowAny]
    queryset = Review.objects.filter(is_active=True).order_by("-created_at")
