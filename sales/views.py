from django.shortcuts import render
from rest_framework import generics
from sales.models import Sale, SaleItem
from sales.serializers import SaleSerializer, SaleItemSerializer

class SaleListView(generics.ListAPIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
