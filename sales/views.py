from django.shortcuts import render
from rest_framework import generics
from sales.models import Sale, SaleItem
from sales.serializers import SaleSerializer, SaleItemSerializer
from rest_framework.permissions import IsAuthenticated


class SaleCreateView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
class SaleListView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
class SaleDetailView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer

class SaleItemCreateView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = SaleItem.objects.all()
    serializer_class = SaleItemSerializer

class SaleItemListView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = SaleItem.objects.all()
    serializer_class = SaleItemSerializer

class SaleItemDetailView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = SaleItem.objects.all()
    serializer_class = SaleItemSerializer

class SaleItemUpdateView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = SaleItem.objects.all()
    serializer_class = SaleItemSerializer

class SaleItemDeleteView(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = SaleItem.objects.all()
    serializer_class = SaleItemSerializer

