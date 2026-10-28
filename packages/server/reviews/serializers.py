from rest_framework import serializers

from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    # The frontend receives the image path as "image".
    image = serializers.CharField(
        source="image_path",
        read_only=True,
    )

    class Meta:
        model = Review
        fields = [
            "id",
            "name",
            "role",
            "rating",
            "message",
            "image",
        ]


