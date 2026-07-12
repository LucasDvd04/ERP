from django.contrib import admin
from materials.models import Material, Supplier

# Register your models here.

@admin.register(Supplier)
class SupplierAdmin(admin.ModelAdmin):
    list_display = ('name', 'contact_email', 'contact_phone', )
    search_fields = ('name', 'contact_email', 'contact_phone',)

@admin.register(Material)
class MaterialAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'pack_quantity', )
    search_fields = ('name', 'description',)


