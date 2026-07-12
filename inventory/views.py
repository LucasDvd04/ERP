from django.shortcuts import render
from rest_framework import generics
from .models import Stock
from .serializers import StockSerializer, InventoryTransactionSerializer


class ListStockView(generics.ListAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer

class DetailStockView(generics.RetrieveAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer

class ListInventoryTransactionView(generics.ListAPIView):
    queryset = Stock.objects.all()
    serializer_class = InventoryTransactionSerializer

class CreateInventoryTransactionView(generics.CreateAPIView):
    queryset = Stock.objects.all()
    serializer_class = InventoryTransactionSerializer

class UpdateInventoryTransactionView(generics.UpdateAPIView):
    queryset = Stock.objects.all()
    serializer_class = InventoryTransactionSerializer

class DetailInventoryTransactionView(generics.RetrieveAPIView):
    queryset = Stock.objects.all()
    serializer_class = InventoryTransactionSerializer