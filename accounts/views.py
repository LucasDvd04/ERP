from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response

# class LoginView(TokenObtainPairView):
#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)

#         access = serializer.validated_data["access"]
#         refresh = serializer.validated_data["refresh"]

#         response = Response({"success":True})

#         response.set_cookie(
#             "access_token",
#             access,
#             httponly=True,
#             secure=True,
#             samesite= None,
#             max_age=60*5,
#         )

#         response.set_cookie(
#             "refresh_token",
#             refresh,
#             httponly=True,
#             secure=False,
#             samesite="lax",
#             max_age=60*60*24
#         )

#         return response
