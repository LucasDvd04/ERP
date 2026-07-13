from django.shortcuts import render
from rest_framework import generics
from materials.models import Material, Supplier
from materials.serializers import MaterialSerializer,SupplierSerializer
from rest_framework.permissions import IsAuthenticated
class CreateMaterialView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer

class ListMaterialView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer

class RetrieveMaterialView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer

class UpdateMaterialView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer

class DeleteMaterialView(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer

class ListCreateSupplierView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer

class RetrieveUpdateDeleteSupplierView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer