from django.shortcuts import render
from django.http import JsonResponse
from .models import Contacts
from .serializers import ContactSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET','POST'])
def contacts_list(request):
    if request.method == 'GET':
     contacts = Contacts.objects.all()
     data = ContactSerializer(contacts,many= True)
     return JsonResponse(data.data,safe =False)
    
    elif request.method == 'POST':
       serialzer = ContactSerializer(data = request.data)
       if serialzer.is_valid():
          serialzer.save()
          return Response({"Message": "contact created successful"})