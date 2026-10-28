from django.contrib import admin

from .models import CarouselImage


@admin.register(CarouselImage)
class CarouselImageAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "image_path",
        "display_order",
        "is_active",
    )

    list_filter = ("is_active",)
    search_fields = ("title", "image_path", "alt_text")
    list_editable = ("display_order", "is_active")
    ordering = ("display_order", "id")

    