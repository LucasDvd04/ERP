from rest_framework import generics
from products.models import Product
from products.serializers import ProductSerializer


class ProductListView(generics.ListCreateAPIView):
    model = Product
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    model = Product
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductUpdateView(generics.UpdateAPIView):
    model = Product
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDeleteView(generics.DestroyAPIView):
    model = Product
    queryset = Product.objects.all()
    serializer_class = ProductSerializer