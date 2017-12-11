from django.shortcuts import render, render_to_response

# Create your views here.
def profile(request):
	return render_to_response('profile.html')

def rp(request):
 	return render_to_response('rp.html')

def ap(request):
 	return render_to_response('ap.html')

def rep1(request):
 	return render_to_response('rep1.html')

def rep2(request):
 	return render_to_response('rep2.html')
