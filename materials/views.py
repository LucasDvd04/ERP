from django.shortcuts import render
from rest_framework import generics
from materials.models import Material, Supplier
from materials.serializers import MaterialSerializer,SupplierSerializer

class CreateMaterialView(generics.CreateAPIView):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer

class ListMaterialView(generics.ListAPIView):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer

class RetrieveMaterialView(generics.RetrieveAPIView):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer

class UpdateMaterialView(generics.UpdateAPIView):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer

class DeleteMaterialView(generics.DestroyAPIView):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer

class ListCreateSupplierView(generics.ListCreateAPIView):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer

class RetrieveUpdateDeleteSupplierView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer