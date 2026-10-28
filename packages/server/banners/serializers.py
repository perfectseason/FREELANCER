from rest_framework import serializers

from .models import CarouselImage


class CarouselImageSerializer(serializers.ModelSerializer):
    # React receives the database's image_path under the name "image".
    image = serializers.CharField(
        source="image_path",
        read_only=True,
    )

    alt = serializers.CharField(
        source="alt_text",
        read_only=True,
    )

    class Meta:
        model = CarouselImage
        fields = [
            "id",
            "title",
            "image",
            "alt",
            "display_order",
        ]