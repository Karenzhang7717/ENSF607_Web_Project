from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from echos.models import Echo
from echos.serializers import EchoSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def echo_list(request):
    if request.method == 'GET':
        echos = Echo.objects.all()

        message = request.query_params.get('message', None)
        if message is not None:
            echos = echos.filter(message__icontains=message)

        echos_serializer = EchoSerializer(echos, many=True)
        return JsonResponse(echos_serializer.data, safe=False)
        # 'safe=False' for objects serialization

    elif request.method == 'POST':
        echo_data = JSONParser().parse(request)
        echo_serializer = EchoSerializer(data=echo_data)
        if echo_serializer.is_valid():
            echo_serializer.save()
            return JsonResponse(echo_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(echo_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        count = Echo.objects.all().delete()
        return JsonResponse({'message': '{} echos were deleted successfully!'.format(count[0])},
                            status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def echo_detail(request, pk):
    try:
        echo = Echo.objects.get(pk=pk)
    except Echo.DoesNotExist:
        return JsonResponse({'message': 'Echo does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        echo_serializer = EchoSerializer(echo)
        return JsonResponse(echo_serializer.data)

    elif request.method == 'PUT':
        echo_data = JSONParser().parse(request)
        echo_serializer = EchoSerializer(echo, data=echo_data)
        if echo_serializer.is_valid():
            echo_serializer.save()
            return JsonResponse(echo_serializer.data)
        return JsonResponse(echo_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        echo.delete()
        return JsonResponse({'message': 'Echo was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def echo_list_published(request):
    echos = Echo.objects.filter(published=True)

    if request.method == 'GET':
        echos_serializer = EchoSerializer(echos, many=True)
        return JsonResponse(echos_serializer.data, safe=False)
