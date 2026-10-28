from django.contrib import admin

from .models import Review


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "role",
        "rating",
        "is_active",
        "created_at",
    )
    list_filter = ("rating", "is_active")
    search_fields = ("name", "role", "message")
    list_editable = ("is_active",)
    