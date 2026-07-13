from django.shortcuts import render
from rest_framework import generics
from .models import Stock
from .serializers import StockSerializer, InventoryTransactionSerializer
from rest_framework.permissions import IsAuthenticated

class ListStockView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Stock.objects.all()
    serializer_class = StockSerializer

class DetailStockView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Stock.objects.all()
    serializer_class = StockSerializer

class ListInventoryTransactionView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Stock.objects.all()
    serializer_class = InventoryTransactionSerializer

class CreateInventoryTransactionView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Stock.objects.all()
    serializer_class = InventoryTransactionSerializer

class UpdateInventoryTransactionView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Stock.objects.all()
    serializer_class = InventoryTransactionSerializer

class DetailInventoryTransactionView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Stock.objects.all()
    serializer_class = InventoryTransactionSerializer