jQuery("#simulation")
  .on("click", ".s-ac874657-5db3-48a4-8919-517b0d2b6358 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Drawer",
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInOutQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2d5566ac-008b-45e8-b781-ec6d43b77daa",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d679283a-b864-4d24-b80b-1cbcdefc5326",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d679283a-b864-4d24-b80b-1cbcdefc5326"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_7": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_7 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_7 span": {
                      "attributes": {
                        "color": "#02BBD2",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_4": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_4 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Label_6": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "materialdesignjim-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Label_6 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "materialdesignjim-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_11": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_11 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_12": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_12 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Drawer",
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-306"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a2dbc7d2-748b-470e-88fc-594a22644906"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#02BBD2",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_4": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_4 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Label_6": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "materialdesignjim-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Label_6 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "materialdesignjim-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_11": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_11 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_12": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_12 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Drawer",
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-306"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ac874657-5db3-48a4-8919-517b0d2b6358"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_4": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_4 span": {
                      "attributes": {
                        "color": "#02BBD2",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Label_6": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "materialdesignjim-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Label_6 span": {
                      "attributes": {
                        "color": "#02BBD2",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "materialdesignjim-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_11": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_11 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_12": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_12 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Drawer",
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-306"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/00416c7b-22b7-4d88-8ccd-0afe730fe0c2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_11": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_11 span": {
                      "attributes": {
                        "color": "#02BBD2",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_4": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_4 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Label_6": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "materialdesignjim-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Label_6 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "materialdesignjim-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_12": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_12 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Drawer",
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-306"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5d4ba641-79c5-454b-b880-5c6c5cf52bf8"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_12": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_12 span": {
                      "attributes": {
                        "color": "#02BBD2",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_4": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_4 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Label_6": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "materialdesignjim-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Label_6 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "materialdesignjim-Regular,Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_11": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ac874657-5db3-48a4-8919-517b0d2b6358 #s-Rectangle_11 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Drawer",
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-306"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/324d9c61-fee4-4543-8e43-8e7911a5d26a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });