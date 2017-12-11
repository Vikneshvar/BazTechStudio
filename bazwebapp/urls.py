from django.conf.urls import url
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    url(r'^$', views.profile, name='profile'),
    url(r'^rp$', views.rp, name='rp'),
    url(r'^ap$', views.ap, name='ap'),
    url(r'^rp/rep1$', views.rep1, name='rep1'),
    url(r'^rp/rep2$', views.rep2, name='rep2'),
]

urlpatterns += staticfiles_urlpatterns()
