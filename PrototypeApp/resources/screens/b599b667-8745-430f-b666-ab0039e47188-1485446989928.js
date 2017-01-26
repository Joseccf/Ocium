jQuery("#simulation")
  .on("click", ".s-b599b667-8745-430f-b666-ab0039e47188 .click", function(event, data) {
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
    } else if(jFirer.is("#s-Hotspot_1")) {
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
    } else if(jFirer.is("#s-Image_3")) {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_7": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_7 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_7 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "materialdesignjim-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12 span": {
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
                    "target": "screens/b37e0e1a-b07c-45b1-a4a4-64e4c3db87f1"
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "materialdesignjim-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "materialdesignjim-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12 span": {
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
                    "target": "screens/ce4a531d-90db-4579-9d5f-4f035a441489"
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
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "materialdesignjim-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12 span": {
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
                    "target": "screens/98e44735-fe86-4384-8e69-99a6259822bf"
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
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "materialdesignjim-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12 span": {
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
                    "target": "screens/a751b86c-9761-48d3-8447-2bc4e4fc097f"
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
    } else if(jFirer.is("#s-Rectangle_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "22px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#000000",
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 span": {
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
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1a068508-0402-4b55-9bd8-b92662f73efb"
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "materialdesignjim-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12 span": {
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
                    "target": "screens/073e0d70-c71d-49cf-bc43-6f072d5cc824"
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_12 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_3 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_4 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "materialdesignjim-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Label_6 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_5 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_6 span": {
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
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11": {
                      "attributes": {
                        "line-height": "26px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b599b667-8745-430f-b666-ab0039e47188 #s-Rectangle_11 span": {
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
    }
  });