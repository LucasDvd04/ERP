from django.contrib import admin
from products.models import Product


# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name_internal', 'sale_price_internal', 'description', 'created_at', 'updated_at')
    search_fields = ('name_internal', 'description')
    list_filter = ('created_at', 'updated_at')

admin.site.register(Product, ProductAdmin)
    