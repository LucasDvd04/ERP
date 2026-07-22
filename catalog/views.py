from rest_framework import generics
from catalog.models import Product
from catalog.serializers import ProductSerializer
from rest_framework.permissions import IsAuthenticated


class ProductListView(generics.ListAPIView):
    # permission_classes = [IsAuthenticated]
    model = Product
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductCreateView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    model = Product
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    model = Product
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductUpdateView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    model = Product
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDeleteView(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]
    model = Product
    queryset = Product.objects.all()
    serializer_class = ProductSerializer