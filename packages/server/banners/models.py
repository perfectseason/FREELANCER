from django.db import models


class CarouselImage(models.Model):
    title = models.CharField(max_length=150)
    alt_text = models.CharField(max_length=255, blank=True)

    # Stores a frontend image path, not the actual image file.
    # Example: /images/carousel/slide1.jpg
    image_path = models.CharField(max_length=255)

    is_active = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["display_order", "id"]
        verbose_name = "Carousel Image"
        verbose_name_plural = "Carousel Images"

    def __str__(self):
        return self.title